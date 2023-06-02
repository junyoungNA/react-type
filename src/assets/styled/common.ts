import styled from 'styled-components';

export interface ISectionInner {
    width?:string;
    height?: string;
    color?:string;
}

export interface IVisualText {
    color?:string;
    fontSize?:string;
    fontWeight?:string;
}


export const VisualText = styled.div<IVisualText>`
    font-size: ${(props) => props.fontSize || '32px'};
    color: ${(props) => props.color || 'white'};
    font-weight:${(props) => props.fontWeight || '600'};
    line-height: 50px;
    white-space: pre-line;
`


export const VisualInner = styled.div<ISectionInner>`
    position: relative;
    width: ${(props ) => props.width || '100%'};
    height: ${(props) => props.height || '100px'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    flex-shrink: 0;
`
