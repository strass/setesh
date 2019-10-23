import React, { useReducer, Reducer, useContext } from "react";
import {
  FormGroup,
  InputGroup,
  TextArea,
  H4,
  Card,
  Button
} from "@blueprintjs/core";
import { set, without, forEach } from "lodash";
import AuthContext from "../context/Auth";
import { useCreatePostingMutation } from "../graphql/createPosting.generated";

interface PostingState {
  name: string | undefined;
  description: string | undefined;
  fields: {
    name: string | undefined;
    value: string | undefined;
    inline?: boolean;
  }[];
}

export default () => {
  const auth = useContext(AuthContext);
  const loggedIn = !!auth.id;

  // const [createPosting, { loading }] = useMutation(CREATE_POSTING);

  const [createPosting, { loading }] = useCreatePostingMutation();

  const [form, dispatch] = useReducer<Reducer<PostingState, any>>(
    (state, action) => {
      const newState = { ...set(state, action.key, action.value) };
      return newState;
    },
    {
      name: undefined,
      description: undefined,
      fields: [{ name: undefined, value: undefined }]
    }
  );
  return (
    <Card style={{ marginTop: 24 }}>
      <form
        onSubmit={async e => {
          if (!loggedIn) return;
          e.preventDefault();
          let emptyFields = false;
          forEach(form, (value, key) => {
            if (key === "fields") {
              console.log(value);
              forEach(value as typeof form["fields"], (field, i) => {
                console.log(field);
                if (!field.name) {
                  dispatch({ key: `fields[${i}].name`, value: "" });
                }
                if (!field.value) {
                  dispatch({ key: `fields[${i}].value`, value: "" });
                }
              });
            } else if (!value) {
              dispatch({ key, value: "" });
              emptyFields = true;
            }
          });
          if (emptyFields) return;
          try {
            const result = await createPosting({
              variables: {
                posting: [
                  {
                    ...form,
                    author_name: `@${auth.username}#${auth.discriminator}`,
                    author_icon: `https://cdn.discordapp.com/avatars/${
                      auth.id
                    }/${auth.avatar}.png`,
                    author_url: `https://setesh.calendar/users/${auth.id}`
                  }
                ]
              }
            });
            console.log(result);
          } catch (ex) {
            console.error(ex);
          }
        }}
        style={{ maxWidth: "600px" }}
      >
        <fieldset
          disabled={!loggedIn}
          style={{ margin: 0, padding: 0, border: "none" }}
        >
          <FormGroup
            helperText={`${256 -
              (form.name || "").length} characters remaining`}
            label="Game Name"
            labelFor="name-input"
            labelInfo="(required)"
          >
            <InputGroup
              id="name-input"
              placeholder="War for the Caul"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ key: "name", value: e.target.value || "" })
              }
              onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ key: "name", value: e.target.value || "" })
              }
              intent={
                form.name !== undefined && !form.name ? "danger" : undefined
              }
              value={form.name}
            />
          </FormGroup>
          <FormGroup
            helperText={`${2048 -
              (form.description || "").length} characters remaining`}
            label="Description"
            labelFor="description-input"
            labelInfo="(required)"
          >
            <TextArea
              id="description-input"
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                dispatch({ key: "description", value: e.target.value || "" })
              }
              onBlur={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                dispatch({ key: "description", value: e.target.value || "" })
              }
              fill={true}
              value={form.description}
              intent={
                form.description !== undefined && !form.description
                  ? "danger"
                  : undefined
              }
            />
          </FormGroup>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 12 }}
          >
            <H4 style={{ display: "inline" }}>Fields:</H4>
            <Button
              onClick={() =>
                dispatch({ key: "fields", value: [...form.fields, {}] })
              }
              style={{ marginLeft: "auto" }}
            >
              Add Field
            </Button>
          </div>
          {form.fields.map((f, i) => (
            <Card key={i} style={{ margin: "12px 0", position: "relative" }}>
              <Button
                icon="cross"
                minimal
                style={{ position: "absolute", top: 6, right: 6 }}
                intent="danger"
                onClick={() =>
                  dispatch({ key: "fields", value: without(form.fields, f) })
                }
              />
              <FormGroup
                helperText={`${256 -
                  (f.name || "").length} characters remaining`}
                label="Field Name"
                labelFor={`field-${i}-name`}
                labelInfo="(required)"
              >
                <InputGroup
                  id={`field-${i}-name`}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch({
                      key: `fields[${i}].name`,
                      value: e.target.value || ""
                    })
                  }
                  fill={true}
                  value={f.name}
                  intent={
                    f.name !== undefined && !f.name ? "danger" : undefined
                  }
                />
              </FormGroup>
              <FormGroup
                helperText={`${1024 -
                  (f.value || "").length} characters remaining`}
                label="Field Value"
                labelFor={`field-${i}-value`}
                labelInfo="(required)"
              >
                <InputGroup
                  id={`field-${i}-value`}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch({
                      key: `fields[${i}].value`,
                      value: e.target.value || ""
                    })
                  }
                  fill={true}
                  value={f.value}
                  intent={
                    f.value !== undefined && !f.value ? "danger" : undefined
                  }
                />
              </FormGroup>
            </Card>
          ))}

          <Button
            large
            fill={true}
            rightIcon="arrow-right"
            intent="primary"
            type="submit"
            disabled={!loggedIn}
            loading={loading}
          >
            Add Posting
          </Button>
        </fieldset>
      </form>
    </Card>
  );
};
