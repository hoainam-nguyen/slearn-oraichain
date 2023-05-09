import {useState} from 'react';
import tw from 'twin.macro';
import "./styles.css";

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormContainer = tw.div `
  flex
  justify-center
  items-center
`;

const Form = tw.form `
  bg-white
  rounded-lg
  shadow-lg
  p-8
  flex
  flex-col
  justify-center
  items-center
`;

const Label = tw.label `
  text-gray-700
  font-bold
  mb-2
`;

const Input = tw.input `
  shadow
  appearance-none
  border
  rounded
  w-full
  py-2
  px-3
  text-gray-700
  leading-tight
  focus:outline-none
  focus:shadow-outline
  mb-4
`;

const Button = tw.button `
  bg-blue-500
  hover:bg-blue-700
  text-white
  font-bold
  py-2
  px-4
  rounded
`;

const UserForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [school, setSchool] = useState('');
    const [address, setAddress] = useState('');
    const [bio, setBio] = useState('');
    const [nickname, setNickname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Age:', age);
        console.log('Phone:', phone);
        console.log('Email:', email);
        console.log('School:', school);
        console.log('Address:', address);
        console.log('Bio:', bio);
        console.log('Nickname:', nickname);
    };

    const handleSubmitBtn = () => { // do something when the Notify button is clicked
        toast('Notification has been enabled successfully!', {position: toast.POSITION.BOTTOM_RIGHT});
    };

    return (
        <div className="update-user-profile">

            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <div tw="grid grid-cols-2 gap-4">
                        <div>
                            <div style={
                                {
                                    display: "flex",
                                    flexDirection: "row"
                                }
                            }>
                                <div style={
                                    {flex: 2}
                                }>
                                    <Label>
                                        Name:
                                        <Input type="text"
                                            value={name}
                                            onChange={
                                                (e) => setName(e.target.value)
                                            }/>
                                    </Label>
                                </div>
                                <div style={
                                    {
                                        flex: 1,
                                        marginLeft: "10px"
                                    }
                                }>
                                    <Label>
                                        Age:
                                        <Input type="text"
                                            value={age}
                                            onChange={
                                                (e) => setAge(e.target.value)
                                            }/>
                                    </Label>
                                </div>
                            </div>

                            <div style={
                                {
                                    display: "flex",
                                    flexDirection: "row"
                                }
                            }>
                                <div style={
                                    {flex: 1}
                                }>
                                    <Label>
                                        Phone:
                                        <Input type="text"
                                            value={phone}
                                            onChange={
                                                (e) => setPhone(e.target.value)
                                            }/>
                                    </Label>
                                </div>
                                <div style={
                                    {
                                        flex: 2,
                                        marginLeft: "10px"
                                    }
                                }>
                                    <Label>
                                        Email:
                                        <Input type="email"
                                            value={email}
                                            onChange={
                                                (e) => setEmail(e.target.value)
                                            }/>
                                    </Label>
                                </div>

                            </div>

                            <div>
                                <Label>
                                    Nickname:
                                    <Input type="text" value ={nickname}
                                        onChange={
                                            (e) => setNickname(e.target.value)
                                        }/>
                                </Label>
                                <Label>
                                    Bio:
                                    <Input type="text"
                                        value={bio}
                                        onChange={
                                            (e) => setBio(e.target.value)
                                        }/>
                                </Label>

                            </div>
                        </div>
                        <div>
                            <Label>
                                School:
                                <Input type="text"
                                    value={school}
                                    onChange={
                                        (e) => setSchool(e.target.value)
                                    }/>
                            </Label>
                            <Label>
                                Address:
                                <Input type="text"
                                    value={address}
                                    onChange={
                                        (e) => setAddress(e.target.value)
                                    }/>
                            </Label>
                        </div>
                    </div>
                    <Button type="submit"
                        onClick={handleSubmitBtn}>Update</Button>
                    <ToastContainer/>
                </Form>
            </FormContainer>
        </div>
    );
};

export default UserForm;
