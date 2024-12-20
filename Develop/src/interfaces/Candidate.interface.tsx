// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
  id: number;
  login: string;
  email: string;
  phone: string;
  skills: string[];
  avatar: string;
}