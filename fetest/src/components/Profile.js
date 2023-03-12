import { useState } from 'react';
import './profile.css';
import Add from './function/add';
import List from './function/list';
import {Link} from 'react-router-dom' 
// React Hook 

const initialData = [
  {
    id: 1, 
    title: 'ABC',
    description: 'Description',
    tag:'HTML'
  },
  {
    id: 2, 
    title: 'ABC',
    description: 'Description',
    tag:'HTML'
  },
  {
    id: 3, 
    title: 'ABC',
    description: 'Description',
    tag:'HTML'
  }
]
const initObj = {
  id: 0,
  title: '',
  description: '',
  tag:'',
}
function ProfilePage(){
    
  let [object, setObject] = useState(initialData);
  let [obj, setObj] = useState(initObj);

  const addOrUpdateFunc = (obj) => {
    if(obj.id>0){
      //sua
      let s = object.find(x =>x.id == obj.id);
      s.title = obj.title;
      s.description = obj.description;
      s.tag = obj.tag;

      setObject([...object]);
      setObj({...initObj});
    }else{
      //them moi
      obj.id = Math.random();
      let newArr = [...object, obj];  
      setObject(newArr);
      setObj({...initObj});
    }
  }

  const editDataFunc = (obj) => {
    setObj({...obj});
  }
  const deleteDataFunc = id => {
    let arr = object.filter(x =>x.id !== id);
    setObject(arr); 
  }
    return (
        <div className='container-fuild'>
          <Link to='/home'>
          <button>Posts</button>
          </Link>
          <Link to='/login'>
          <button>Logout</button>
          </Link>
        <div className='row m-0'>
          <div className='col-md-8'>
            <List
            editDataFunc={editDataFunc} 
            deleteDataFunc ={deleteDataFunc}
            object={object}/>
          </div>
          <div className='col-md-4'>
            <Add 
            obj={obj} 
            addOrUpdateFunc={addOrUpdateFunc}/>
          </div>
        </div>
      </div>
    );
}
export default ProfilePage;