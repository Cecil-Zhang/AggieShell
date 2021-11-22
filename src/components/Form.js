import { useState } from "react";
import { createCampaign } from "../solana";
const Form = ({setRoute}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [long_description, setLongDescription] = useState('')
    const [image, setImageLink] = useState('')
    const [target, setTarget] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();
        await createCampaign(name, description, long_description, image, target);
        setRoute(0);
    }

    return (
        <form className="ui form">
            <div className="field">
                <label>Title</label>
                <input type="text" name="title" placeholder="Title" onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="field">
                <label>Description</label>
                <input type="text" name="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="field">
                <label>Long Description</label>
                <input type="text" name="long_description" placeholder="Long description" onChange={(e) => setLongDescription(e.target.value)} />
            </div>
            <div className="field">
                <label>Image Link</label>
                <input type="text" name="imageLink" placeholder="imageLink" onChange={(e) => setImageLink(e.target.value)} />
            </div>
            <div className="field">
                <label>Target</label>
                <input type="text" name="target" placeholder="target" onChange={(e) => setTarget(e.target.value)} />
            </div>
            <button className="ui button" type="submit" onClick={onSubmit} >Submit</button>
        </form>
    );
}

export default Form;