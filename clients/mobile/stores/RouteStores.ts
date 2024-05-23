import { create } from 'zustand';
import axios from 'axios';
import { API_BASE_URL } from '../constants';

export interface Route {
    id: number,
}