import React, { useState, useEffect} from 'react';
import { useQuery } from 'react-query';
import LazyLoad from 'react-lazy-load';
import { api } from './API/axios';
import { FavCatsAside } from './styles/catApi';

