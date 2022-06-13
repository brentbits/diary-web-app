import React from "react";
import './extr.css';
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

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "user-diary");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { diary: newDiary });
  };

  const updateUser = async (id, diary) => {
    const userDoc = doc(db, "user-diary", id);
    const newFields = { diary: diary + " this is edit" };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "user-diary", id);
    await deleteDoc(userDoc);
  };

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
                  <FloatingLabel controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    onChange={(event) => {
                      setNewDiary(event.target.value);
                    }}
                  />
                </FloatingLabel>
                <br />
                <div class="center">
                  <Button variant="success" onClick={createUser}>Post</Button>
                </div>
            </div>

            {users.map((user) => {
                return (
                  <div class="div-1">
                    {" "}
                    <h1>{user.diary}</h1>
                    <div class="right">
                      <Button variant="primary"
                        onClick={() => {
                          updateUser(user.id, user.diary);
                        }}
                      >
                        {" "}
                        Update
                      </Button>
                      {" "}
                      <Button variant="danger"
                        onClick={() => {
                          deleteUser(user.id);
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