import React, {useState} from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import Modal from "../Modal";

const First = (props) => {
    const [datas, setDatas] = useState([
            {Name: "Syria",
            Stock: 3000},
            {Name: "Tallin",
            Stock: 3400},
            {Name: "Toronto",
            Stock: 5200}
        ])
        console.log(datas);
        const [showModal, setShowModal]= useState(false)
        console.log(showModal);
        function handleModalState() { 
          setShowModal(!showModal);
          console.log(showModal);
          
         }
  return (
    <>
      <div className="container-fluid m-3">
        <Row>
          <Button variant="info font-weight-bold" onClick={()=> handleModalState()}>CREATE</Button>

          <Col xs={12}>
            <Table striped hover>
              <thead>
                <tr>
                  <th><input type="checkbox" name="" id="" /></th>
                  <th>Location Name</th>
                  <th>Location Stock</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((el,i) =>{
                    return <tr key={i}>
                    <td><input type="checkbox" name="" id="" /></td>
                      <td>{el.Name}</td>
                      <td>{el.Stock}</td>
                    </tr>
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
      <Modal show={showModal}/>
    </>
  );
};

export default First;
