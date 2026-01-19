import { Button, ButtonToolbar, Divider, Form, Link, PasswordInput } from 'rsuite'
import 'rsuite/dist/rsuite.css';


const FormField = ({ label, name, text, ...props }) =>
(
    <Form.Group controlId={name}>
        <Form.Label>{label}</Form.Label>
        <Form.Control name={name} {...props}></Form.Control>
        {text && <Form.Text>{text}</Form.Text>}
    </Form.Group>)


const LoginForm = () => {
    console.warn("LoginForm")
    return (<>
        <div>
            <Form >
                <Form.Stack>
                    <FormField label="Username or email address" name='number' text=''></FormField>
                    <FormField label="Password" name='password' accepter={PasswordInput}></FormField>
                </Form.Stack>
                <Form.Group>
                    <Button appearance='primary' block style={{ marginTop: "15px" }}> Sign in</Button>
                </Form.Group>
                <Divider size="xs" label="or" />
                <Form.Group>
                    <Button appearance='primary' block style={{ marginTop: "15px" }}> Crate account</Button>
                </Form.Group>
            </Form>
        </div>
    </>)
}
export default LoginForm