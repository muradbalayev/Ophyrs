import { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const useChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { accessToken } = useSelector((state) => state.auth);
  const changePassword = async (oldPassword, newPassword) => {
    setIsLoading(true);
    console.log(oldPassword)
    console.log(newPassword)
    console.log(JSON.stringify({ oldPassword, newPassword }))

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_GLOBAL_URL}/api/admin/auth/change-password`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${accessToken} type=access`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ oldPassword, newPassword }),
        }
      );

      const data = await response.json();
      console.log('Response:', data);

      if (!response.ok) {
        throw new Error(data.message || 'Failed to change password');
      }

      toast.success('Password changed successfully');
      return true;
    } catch (error) {
      console.log('Error:', error);
      toast.error(error.message || 'Failed to change password');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { changePassword, isLoading };
};

export default useChangePassword;
