import { ReactNode } from 'react';

export interface ContainerPropsType {
  children: ReactNode;
}

export type Item = {
  id: string;
  name: string;
  desc: string;
  img: string;
};

export type SearchPropsType = {};

export interface SearchStateType {
  searchTerm: string;
}

export type CardListStateType = {
  items: Array<Item>;
};

export type CardPropsType = {
  key: string;
  name: string;
  img: string;
  desc: string;
};
