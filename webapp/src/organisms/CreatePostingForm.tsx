import React, { useReducer, Reducer, useContext } from "react";
import {
  FormGroup,
  InputGroup,
  TextArea,
  H4,
  Card,
  Button
} from "@blueprintjs/core";
import { set, without, forEach, toNumber } from "lodash";
import AuthContext from "../context/Auth";
import { useCreatePostingMutation } from "../graphql/createPosting.generated";
import { oc } from "ts-optchain";

interface PostingState {
  name: string | undefined;
  description: string | undefined;
  type: string | undefined;
  medium: string | undefined;
  time: string | undefined;
  players: number | undefined;
  storyteller: string | undefined;
  fields: {
    name: string | undefined;
    value: string | undefined;
    inline?: boolean;
  }[];
}

export default () => {
  const auth = useContext(AuthContext);
  const loggedIn = !!auth.id;

  const [createPosting, { loading }] = useCreatePostingMutation();

  const [form, dispatch] = useReducer<Reducer<PostingState, any>>(
    (state, action) => {
      const newState = { ...set(state, action.key, action.value) };
      return newState;
    },
    {
      name: undefined,
      type: undefined,
      medium: undefined,
      time: undefined,
      players: undefined,
      description: undefined,
      storyteller: oc(auth).id(),
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
                    author_icon: `https://cdn.discordapp.com/avatars/${auth.id}/${auth.avatar}.png`,
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
          >
            <InputGroup
              id="name-input"
              placeholder="War for the Caul"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ key: "name", value: e.target.value || "" })
              }
              onBlur={e =>
                dispatch({ key: "name", value: e.target.value || "" })
              }
              intent={
                form.name !== undefined && !form.name ? "danger" : undefined
              }
              value={form.name}
            />
          </FormGroup>
          <FormGroup
            helperText={`${1024 -
              (form.description || "").length} characters remaining`}
            label="Type"
            labelFor="type-input"
            labelInfo="Edition, splat, etc."
          >
            <InputGroup
              id="type-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ key: "type", value: e.target.value || "" })
              }
              onBlur={e =>
                dispatch({ key: "type", value: e.target.value || "" })
              }
              fill={true}
              value={form.type}
              intent={
                form.type !== undefined && !form.type ? "danger" : undefined
              }
            />
          </FormGroup>
          <FormGroup
            helperText={`${1024 -
              (form.description || "").length} characters remaining`}
            label="Medium"
            labelFor="medium-input"
            labelInfo="Discord Voice / Discord Text / Roll20 / Face to Face"
          >
            <InputGroup
              id="medium-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ key: "medium", value: e.target.value || "" })
              }
              onBlur={e =>
                dispatch({ key: "medium", value: e.target.value || "" })
              }
              fill={true}
              value={form.medium}
              intent={
                form.medium !== undefined && !form.medium ? "danger" : undefined
              }
            />
          </FormGroup>
          <FormGroup
            helperText={`${1024 -
              (form.description || "").length} characters remaining`}
            label="Time and Timezone"
            labelFor="time-input"
            labelInfo="When and how often the game takes place"
          >
            <InputGroup
              id="time-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ key: "time", value: e.target.value || "" })
              }
              onBlur={e =>
                dispatch({ key: "time", value: e.target.value || "" })
              }
              fill={true}
              value={form.time}
              intent={
                form.time !== undefined && !form.time ? "danger" : undefined
              }
            />
          </FormGroup>
          <FormGroup
            helperText={`${1024 -
              (form.description || "").length} characters remaining`}
            label="Players"
            labelFor="players-input"
            labelInfo="Number of players and open slots"
          >
            <InputGroup
              type="number"
              id="players-input"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  key: "players",
                  value: toNumber(e.target.value) || 0
                })
              }
              onBlur={e =>
                dispatch({
                  key: "players",
                  value: toNumber(e.target.value) || 0
                })
              }
              fill={true}
              value={form.players as any}
              intent={
                form.players !== undefined && !form.players
                  ? "danger"
                  : undefined
              }
            />
          </FormGroup>
          <FormGroup
            helperText={`${2048 -
              (form.description || "").length} characters remaining`}
            label="Description"
            labelFor="description-input"
          >
            <TextArea
              id="description-input"
              onChange={e =>
                dispatch({ key: "description", value: e.target.value || "" })
              }
              onBlur={e =>
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
            <H4 style={{ display: "inline" }}>Custom Fields:</H4>
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
