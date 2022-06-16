import React from "react";
import './css/extr.css';
import 'bootstrap/dist/css/bootstrap.css';
import {FloatingLabel, Form, Button} from 'react-bootstrap';
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Diary(){
  const [newDiary, setNewDiary] = useState("");
  const [upDiary, upNewDiary] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "user-diary");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { diary: newDiary });
  };

  const updateUser = async (id) => {
    const userDoc = doc(db, "user-diary", id);
    const newFields = { diary: upDiary };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "user-diary", id);
    await deleteDoc(userDoc);
  };

  const refreshPage = () => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

    return (
        <div>
            <h2>Diary Logs:</h2>
            <br />
            
            <div class="div-1">
                  <FloatingLabel controlId="floatingTextarea2" label="Write your diary here...">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '120px' }}
                    onChange={(event) => {
                      setNewDiary(event.target.value);
                    }}
                  />
                </FloatingLabel>
                <br />
                <div class="center">
                  <Button variant="success"
                    onClick={() => {
                      createUser();
                      refreshPage();
                    }}
                  >Post</Button>
                </div>
            </div>

            {users.map((user) => {
                return (
                  <div class="div-1">
                    <div>
                      <FloatingLabel controlId="floatingTextarea2">
                        <Form.Control
                          as="textarea"
                          style={{padding: '10px', fontSize: '20px', fontWeight: 'bold', height: '150px'}}
                          defaultValue= {user.diary}
                          onChange={(event) => {
                            upNewDiary(event.target.value);
                          }}
                        />
                      </FloatingLabel>
                    </div>
                    <div class="right">
                      <Button variant="primary"
                        onClick={() => {
                          updateUser(user.id, user.diary);
                          refreshPage();
                        }}
                      >
                      {" "}
                      Update
                      </Button>
                      {" "}
                      <Button variant="danger"
                        onClick={() => {
                        deleteUser(user.id);
                        refreshPage();
                        }}
                      >
                        {" "}
                        Delete
                      </Button>
                    </div>
                    
                  </div>
                  
                );
            })}
            


        </div>
    );
}

export default Diary;