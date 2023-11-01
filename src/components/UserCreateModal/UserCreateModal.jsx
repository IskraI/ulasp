import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import {Modal} from '../Modal/Modal';

const UserCreateModal = ({showModal}) => {


    console.log('showModal bp UserCreateModal ', showModal)
    // const [dispatch, { isLoading }] = useUpdateUserMutation();
   
  
    const handleCloseModal = () => {
        showModal = !showModal;
    };
  
  
    const handleFormSubmit = e => {
      e.preventDefault();
      const formData = new FormData();
     console.log('formData', formData)

    //   dispatch(formData)
    //     .unwrap()
    //     .then(() => {
       
         
    //     })
    //     .catch(e => console.log(e.data.message));
    };
  

  
 
  
    return (
      <Modal  width={"898px"} padding={"24px"} 
      onClose={ handleCloseModal}>
        <div >
               <form onSubmit={handleFormSubmit}>
            <div>
            
              <input
                name="name"
              
                type="text"
              
              />
            </div>
            
            <button type="submit" >
              {'Додати'}
            </button>
          </form>
        </div>
      </Modal>
    );
  };
  
  export default UserCreateModal;