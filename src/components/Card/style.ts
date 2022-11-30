import styled from 'styled-components';
import tw from 'twin.macro';

export const CardGrid = styled.div` 
    ${tw`grid grid-flow-row gap-8 text-neutral-600
     sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
`

export const CardItem = styled.div`
    ${tw`my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900
    bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1`}
`

export const Figure = styled.figure``

export const CardImage = styled.img`
    ${tw`rounded-t h-56 w-full object-cover`}
`

export const FigCaption = styled.figcaption`${tw`p-4`}`

export const Title = styled.p`${tw`text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300`}`

export const BetInformation = styled.div`${tw`text-xs flex justify-between`}`;

export const BetList = styled.div`${tw``}`;

export const BetItem = styled.div`${tw`mt-1 text-gray-300`}`;

