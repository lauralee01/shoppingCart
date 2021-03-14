import styled from 'styled-components';

export const Bar = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const Cover = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    flex: 1 1 30%;
    margin: 0 1rem 1rem 0;

    img {
        height: 300px;
    }

    button {
        border: none;
        outline: 0;
        padding: 12px;
        color: white;
        background-color: #FF1493;
        text-align: center;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
    }

    i.material-icons {
        cursor: pointer;
    }
`;
