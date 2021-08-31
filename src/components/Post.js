import React,{useState} from 'react'

function Modal({data}) {

    const [modal,setModal] = useState(false);
  
    // const onSetRecom = () =>{
    //   setRecom(recom + 1);
    // }

    const onModalOpen = (idx) => {
        setModal(!modal);
    }

    return (
        
        <div>
            <h3 className = "title" onClick={onModalOpen}>
                {data.title}
            </h3>
            <p>{data.date.split(' ')[0]}</p>
            <hr/>
            {modal?
                <div className="Modal" onClick={onModalOpen}>
                    <h2>{data.title}</h2>
                    <p>{data.date}</p>
                    <p>{data.content}</p>
                </div>
            :null}

        </div>
    )
}

export default Modal
