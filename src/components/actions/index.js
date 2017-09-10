import { EMAIL_CHANGED } from './types';

export const EmailChange = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};
