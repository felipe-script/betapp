import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
    ${tw`dark:bg-gray-900 flex justify-center h-screen`};
`

export const ColumnLeft = styled.div`
    ${tw`hidden bg-cover lg:block lg:w-2/3`};
    background-image: url(https://images.unsplash.com/photo-1637203727700-9d86c74904d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80);
`

export const ContainerDescription = styled.div`
    ${tw`flex items-center h-full px-20 bg-gray-700 bg-opacity-40`};
`

export const ContentDescription = styled.div``

export const BrandTitle = styled.h2`  
    ${tw`text-4xl font-bold text-white`};
`

export const Description = styled.p`
    ${tw`max-w-xl mt-3 text-gray-100`};
`

export const ColumnRight = styled.div`
    ${tw`flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6`};
`

export const ContentColumnRight = styled.div`
    ${tw`flex-1`};
`

export const CenteredText = styled.div`
    ${tw`text-center`};
`

export const BrandTitleRight = styled.h2`
    ${tw`text-2xl font-bold text-center text-gray-700 dark:text-white`}
`;

export const FormContainer = styled.h2`
    ${tw`mt-8`}
`;

export const Form = styled.form``;

export const WrapperEmail = styled.div``

export const WrapperPassword = styled.div`
    ${tw`mt-6`}
`

export const WrapperButton= styled.div`
    ${tw`mt-6`}
`

export const Alert = styled.div`${tw`bg-red-100 rounded-lg py-5 px-6 mt-10 text-base text-red-700 `}`