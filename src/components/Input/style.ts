import styled from 'styled-components';
import tw from 'twin.macro';

export const Input = styled.input`
${tw`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400
 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600
 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400
 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`};
`