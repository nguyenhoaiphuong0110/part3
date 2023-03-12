import { useEffect } from 'react';
import { useForm } from 'react-hook-form'; 
import './2.css';
function Add(props){

    let { addOrUpdateFunc, obj } = props;
    let { register, handleSubmit,reset } = useForm();

    const submitData = (data) => {
        addOrUpdateFunc(data);
    }


    useEffect(() => {
      reset({...obj});
    },[obj])

    
    return (
        <div className="add">
            <h2 className='title'> Add new </h2>
            <form onSubmit={handleSubmit(submitData)}>
                <div className='row mb-4'>
                <div className='col-md-4'>
                    <p> Title  </p>
                </div>
                <div className='col-md-8'>
                    <input {...register('title')} className='form-control' />
                </div>
                </div>
                <div className='row mb-4'>
                <div className='col-md-4'>
                    <p> Description  </p>
                </div>
                <div className='col-md-8'>
                    <input  {...register('description')} className='form-control' />
                </div>
                </div>
                <div className='row mb-4'>
                <div className='col-md-4'>
                    <p>Tag</p>
                </div>
                <div className='col-md-8'>
                    <input  {...register('tag')} className='form-control' />
                </div>
                </div>
                <div className='mt-4'>
                <button type='submit' className='btn btn-primary'> Submit </button>
                </div>
            </form>
        </div>
    )
}

export default Add;