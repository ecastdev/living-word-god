import './components.css';
import { Button, Checkbox, TextInput, Label, Select } from "flowbite-react";
export default function StayConnected(){
    return(
        <div className="stay grid place-content-center  h-3/4 mt-32 ">
            <div className='flex flex-col lg:flex-row gap-10 items-center'>
                <ul className='text-center text-white text-3xl  font-bigfont'>
                    <h1>Stay connected to our news letter</h1>
                </ul>
                <ul>
                        <form className="flex max-w-80 lg:w-full flex-col gap-4">
                            <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" className='text-white' />
                            </div>
                            <TextInput id="email1" type="email" placeholder="name@gmail.com" required />
                            </div>
                            <div>
                            <div className="mb-2 w-96 block">
                                <Label htmlFor="password1" value="Your password" className='text-white' />
                            </div>
                            <TextInput id="password1" type="password" required placeholder="password" />
                            </div>
                            <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember" className='text-white'>Remember me</Label>
                            </div>
                            <Button type="submit">Subscribe</Button>
                    </form>

                </ul>

            </div>

        </div>
    )
}