
import styled from "styled-components";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom"

function Edit({user, viewItem}){
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
    const displayTags = tagList.map(tag => <span key={tag}>{tag} </span>)

    useEffect(() =>{
        console.log(viewItem.tags)
        setPieceForm({
            title: viewItem.title,
            content: viewItem.content,
            length: viewItem.length,
            category: viewItem.category,
            user_id: user
        })
        setTagForm({
            ...tagForm,
            creation_id: viewItem.id
        })
        viewItem.tags.forEach(tag =>{
            setTagList((tagList) => [...tagList, tag.tag])
        })
    }, [viewItem])

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

    function patchCreation(e, form){
        e.preventDefault()
        const updCreation = {
            title: form.title,
            content: form.content,
            length: form.content.length,
            category: form.category,
            user_id: user
        }

        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updCreation)
        }

        fetch(`http://localhost:9292/creations/${viewItem.id}`, configObj)
        .then(r => r.json())
        .then(data => {
            alert(`${data.title} has been updated.`)
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

    function postTags(e, form){
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
        <EditPage>
        <h1>Edit "{viewItem.title}"</h1>
        <PieceForm onChange={handlePieceChange} onSubmit={(e) => patchCreation(e, pieceForm)}>
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
            <form onSubmit ={(e) => postTags(e, tagForm)}>
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
            }}><Link to={`/my_creations`}>Save Tags</Link></button> : <button disabled>Save Tags</button>}
        </TagForm>
        
        </EditPage>
    )
}

export default Edit;

const EditPage = styled.div`
text-align: center;

`

const PieceForm = styled.form`
margin-top: 30px;
text-align: center;
.content{
    width: 50%;
    height: 50vh;
    flex-wrap: wrap;
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
`