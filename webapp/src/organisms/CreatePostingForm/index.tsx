import React, { useContext } from 'react';
import { map } from 'lodash';
import AuthContext from '../../context/Auth';
import { useCreatePostingMutation } from '../../graphql/createPosting.generated';
import { oc } from 'ts-optchain';
import { useFormik } from 'formik';
import { Card, Form, Input, Button, InputNumber } from 'antd';
import { labels } from './form';
import * as Yup from 'yup';

export interface PostingState {
  name: string | undefined;
  description: string | undefined;
  type: string | undefined;
  medium: string | undefined;
  time: string | undefined;
  players: number | undefined;
  storyteller: string | undefined;
}

export default () => {
  const auth = useContext(AuthContext);
  const loggedIn = !!auth.id;

  const [createPosting, { loading }] = useCreatePostingMutation();

  const formik = useFormik<PostingState>({
    initialValues: {
      name: undefined,
      type: undefined,
      medium: undefined,
      time: undefined,
      players: 0,
      description: undefined,
      storyteller: oc(auth).id(),
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      type: Yup.string().required('Required'),
      medium: Yup.string().required('Required'),
      time: Yup.string().required('Required'),
      players: Yup.number().required('Required'),
      description: Yup.string().required('Required'),
      storyteller: Yup.string().required('Required'),
    }),
    onSubmit: async values => {
      if (!loggedIn) {
        console.error('Not logged in');
        return;
      }

      try {
        const result = await createPosting({
          variables: {
            posting: [
              {
                ...values,
                author_name: `@${auth.username}#${auth.discriminator}`,
                author_icon: `https://cdn.discordapp.com/avatars/${auth.id}/${auth.avatar}.png`,
                author_url: `https://setesh.calendar/users/${auth.id}`,
              },
            ],
          },
        });
        console.log(result);
      } catch (ex) {
        console.error(ex);
      }
    },
  });

  return (
    <Card style={{ marginTop: 24 }} loading={loading}>
      <Form onSubmit={formik.handleSubmit} style={{ maxWidth: '600px' }}>
        <fieldset disabled={!loggedIn}>
          {map(formik.values, (value, key) => {
            const fieldErrors = formik.errors[key as keyof typeof formik.values];
            const fieldTouched = formik.touched[key as keyof typeof formik.values];
            return (
              <Form.Item
                key={key}
                label={labels[key as keyof (typeof formik.values)]}
                required
                validateStatus={fieldTouched && !!fieldErrors ? 'error' : undefined}
                help={fieldTouched && fieldErrors}
                hasFeedback={fieldTouched && !!fieldErrors}
                htmlFor={key}
              >
                {['players'].includes(key) ? (
                  <InputNumber
                    id={key}
                    {...formik.getFieldProps(key)}
                    onChange={num => formik.setFieldValue(key, num)}
                  />
                ) : (
                  <Input id={key} type='text' {...formik.getFieldProps(key)} />
                )}
              </Form.Item>
            );
          })}
          <button type='submit'>Submit</button>
        </fieldset>
      </Form>
    </Card>
  );
};
