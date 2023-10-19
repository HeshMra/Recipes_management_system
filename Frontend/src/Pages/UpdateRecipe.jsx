import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const UpdateRecipe = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingrediants, setIngrediants] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();


  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/recipes/${id}`)
      .then((response) => {
        setName(response.data.name);
        setDescription(response.data.description)
        setIngrediants(response.data.ingrediants)
        setCategory(response.data.category)
        setImage(response.data.image)
        setLoading(false);
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        console.log(error);
      });
  }, [])

  const handleEditRecipe = () => {
    const data = {
      name,
      description,
      ingrediants,
      category,
      image,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/recipes/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Recipe Updated successfully', { variant: 'success' });//snackbarcode
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Check console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='px-48 rounded-lg' >
    <BackButton />
    <h1 className='text-3xl my-4'>Create Book</h1>
    {loading ? <Spinner /> : ''}
    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-
  [600px] p-4 mx-auto'>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full'
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Description</label>
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full '
        />
      </div>
      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Ingrediants
          </label>
        <input
          type='text'
          value={ingrediants}
          onChange={(e) => setIngrediants(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full '
        />
      </div>

      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Category
          </label>
        <input
          type='text'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full '
        />
      </div>

      <div className='my-4'>
        <label className='text-xl mr-4 text-gray-500'>Image
          </label>
        <input
          type='text'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className='border-2 border-gray-500 px-4 py-2 w-full '
        />
      </div>

      <button className='p-2 bg-sky-300 m-8' onClick={handleEditRecipe}>
        Updated
      </button>
    </div>
  </div>
  )
}

export default UpdateRecipe