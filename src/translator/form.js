import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function UserInput(){
    let [value, setValue] = useState('');

    return {
        bind: {
            value,
            onChange: e => setValue(e.target.value)
        },
        clear: () => setValue(('')),
        value: () => value
    }
}

function TransForm({propId, translate, attempt, comp}) {
    let inp = UserInput('');
    let [btnText, setBtn] = useState('Перевести');
    function submitHandler(e){
        e.preventDefault();
        if(inp.bind.value.trim()) {
            inp.clear();
            translate(propId, inp.bind.value);
        }
        if(attempt <= 1){
            setBtn('перезагрузить')
        }

        if (attempt === 0){

            window.location.replace('/');
        }
    }

   return (
       <Form onSubmit={submitHandler}>
           <Form.Group controlId="formBasicEmail">
            <Form.Label>Переведите фразу</Form.Label>
               {
                   attempt !== 0 && comp !== true &&
                    <Form.Control {...inp.bind} required pattern="*[A-Za-z]"/>
               }
               {
                    comp === true &&
                    <Form.Control  disabled={comp}/>
               }
               {
                   attempt === 0 && comp === false &&
                    <Form.Control disabled={true} {...inp.bind} />
               }
           </Form.Group>

           <Button variant="primary" className={'indent-btn-form'} type="submit">
               {btnText}
           </Button>

       </Form>
   );
}

// onChange={()=>translate(inp.bind.value)}

export default TransForm;