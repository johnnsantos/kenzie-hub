import styled from "styled-components";
import { Card, CardContent, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export const StyledCardContent = styled(CardContent)`
  padding: 8px;
  padding-bottom: 0;
  :last-child {
    padding-bottom: 0;
  }
`;
export const StyledCard = styled(Card)`
  background-color: #e8f1f2;
  width: inherit;
  /* padding: 8px;
  padding-bottom: 0; */
  @media (max-width: 768px) {
    width: 95vw;
    height: 130px;
  }
  &:hover {
    box-shadow: 1px 1px 2px #34495e;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #34495e;

  &:hover {
    background-color: #05668d;
  }
`;

export const StyledEdit = styled(EditIcon)`
  width: 1rem;
  /* padding: 0; */
  float: right;
  cursor: pointer;
  /* margin-left: 1rem; */
`;

export const StyledDelete = styled(DeleteIcon)`
  cursor: pointer;
  float: right;
`;
