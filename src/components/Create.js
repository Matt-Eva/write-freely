
import styled from "styled-components";
import {useState} from "react";

function Create({user}) {
    const [pieceForm, setPieceForm] = useState({
        title: "",
        content: "",
        length: 0,
        category: "",
        user_id: user
    })
    const [tagForm, setTagForm] = useState({
        tag: "",
        creation_id: null,
    })
    const[showTagForm, setShowTagForm] = useState(false)
    const[showPieceForm, setShowPieceForm] = useState(true)
    const [tagList, setTagList] = useState([])
console.log(pieceForm)
    const displayTags = tagList.map(tag => <span key={tag} className="tag">#{tag}</span>)

    let pieceFill;
    for (const key in pieceForm){
        if (pieceForm[key] === ""){
            pieceFill = false;
            break
        } else{
            pieceFill = true;
        }
    }

    let tagFill;
    for (const key in tagForm){
        if (tagForm[key] === ""){
            tagFill = false;
            break
        } else{
            tagFill = true;
        }
    }

    function handlePieceChange(e){
        const name = e.target.name
        const value = e.target.value

        setPieceForm({
            ...pieceForm,
            [name]: value
        })
    }

    function postCreation(e, form){
        e.preventDefault()
        const newCreation = {
            title: form.title,
            content: form.content,
            length: form.content.length,
            category: form.category,
            user_id: user
        }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCreation)
        }

        fetch("http://localhost:9292/creations", configObj)
        .then(r => r.json())
        .then(data => {
            setTagForm({
            tag: tagForm.tag,
            creation_id: data.id
            })
            setShowTagForm(true)
            setPieceForm({
                title: "",
                content: "",
                length: 0,
                category: "",
                user_id: user
            })
            setShowPieceForm(false)
        })
    }

    function postTag(e, form){
        e.preventDefault()
        let unique = true;
        tagList.forEach(tag =>{
            if(tag === form.tag){
                unique = false
            }
        })
        if(unique){
            const newTag ={
                tag: form.tag,
                creation_id: form.creation_id
            }
    
            const configObj={
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTag)
            }
    
            fetch("http://localhost:9292/newtag", configObj)
            .then(r => r.json())
            .then(data =>{
                tagList.push(data.tag)
                setTagForm({...tagForm, tag: ""})
            })
        }else{
            alert("You have already added that tag.")
            setTagForm({...tagForm, tag: ""})
        }
       
    }


    return (
        <CreatePage>
        <h1>Post Your Writing!</h1>
        <PieceForm onChange={handlePieceChange} onSubmit={(e) => postCreation(e, pieceForm)}>
            <label>Title</label>
            <input name="title" type="text" value={pieceForm.title}/>
            <br/>
            <label>Category</label>
            <select name="category" value={pieceForm.category}>
                <option value="">Select a Category</option>
                <option value="fiction">Fiction</option>
                <option value="poetry">Poetry</option>
                <option value="nonfiction">NonFiction</option>
                <option value="journalism">Journalism</option>
            </select>
            <br/>
            <label>Text</label>
            <br/>
            <input type="text" name="content" className="content" value={pieceForm.content} placeholder="Use /n to indicate line breaks and paragraphs. Character limit fifty thousand."/>
            <br/>
            {(showPieceForm && pieceFill) ? <button type="submit">Submit</button> : <button type="submit" disabled>Submit</button>}
        </PieceForm>
        <TagForm>
            <form onSubmit ={(e) => postTag(e, tagForm)}>
                <label>Add Tag</label>
                <br/>
                <input type ="text" value={tagForm.tag} onChange={(e) => setTagForm({...tagForm, tag: e.target.value})}/>
                {(showTagForm && tagFill) ? <button type="submit">Submit</button> : <button type="submit" disabled>Submit</button>}
            </form>
            <br/>
            <label>Tags</label>
            <div>
                {displayTags}
            </div>
            { showTagForm ? <button onClick={() =>{
                setTagList([])
                setShowPieceForm(true)
                setShowTagForm(false)
                setTagForm({
                    tag: "",
                    creation_id: null,
                })
            }}>Add Tags</button> : <button disabled>Add Tags</button>}
        </TagForm>
        
        </CreatePage>
    )
}

export default Create;

const CreatePage = styled.div`
text-align: center;

`

const PieceForm = styled.form`
margin-top: 30px;
text-align: center;
.content{
    width: 50%;
    height: 50vh;
    flex-wrap: wrap;
    overflow:
}
`

const TagForm = styled.div`
margin-top: 30px;
margin-bottom: 20px;
text-align: center;

div {
    width: 40%;
    margin-left: 30%;
    min-height: 80px;
    border: solid;
    border-width: 1px;
}

span{
    margin: 0px 5px 0px 5px;
    padding: 0px 2px 0px 2px;
    /* border: solid; */
    /* border-width: 1px; */
    border-radius: 5px;
    background: hsl(50, 50%, 90%);
    cursor: pointer;
}
`