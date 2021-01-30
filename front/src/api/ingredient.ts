import axios from './axios'

interface AddIngredientFormData {
  name: string
  image: any
}

type AddIngredientResponse = {
  data?: {
    data: string
  }
}

export const addIngredient = async (
  newIngredient: AddIngredientFormData,
  // eslint-disable-next-line no-unused-vars
  onUploadProgress: (progressEvent: any) => any
): Promise<AddIngredientResponse> => {
  const formData = new FormData()
  formData.append('name', newIngredient.name)
  formData.append('image', newIngredient.image)
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  }
  return axios.post('/ingredient', formData, config)
}
