import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from "react-router-dom";

export const Header = styled.div`
    ${tw`h-16 w-full bg-black bg-opacity-40`}
`

export const Menu = styled.div`
    ${tw`w-full h-full flex justify-center items-center bg-gray-900 `}
`

export const MenuItem = styled.div`
    ${tw`flex h-full items-center  hover:bg-black hover:bg-opacity-50`}
`

export const MenuLink = styled(Link)`${tw`mx-4 text-white`}`

export const LogoutItem = styled.button`
${tw`absolute right-0 mx-4 text-red-800`}
`

export const DividerMenu = styled.div`${tw`h-8 w-px bg-gray-300`}`