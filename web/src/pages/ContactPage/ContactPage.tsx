import { Form, Submit, TextField, TextAreaField } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const [create, { loading, error }] = useMutation(CREATE_CONTACT)

  const onSubmit = (data) => {
    console.log(data)
    create({ variables: { input: data } })
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <h1>ContactPage</h1>
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <label htmlFor="name">Name</label>
        <TextField name="name" required />
        <label htmlFor="email">Email</label>
        <TextField name="email" required />
        <label htmlFor="message">Message</label>
        <TextAreaField name="message" required />
        <Submit disabled={loading}>Submit</Submit>
      </Form>
    </>
  )
}

export default ContactPage
