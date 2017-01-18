import axios from 'axios';

export const FETCH_POST = 'FETCH_POST';
export const FETCH_PAGE = 'FETCH_PAGE';
export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_SITE_INFO = 'FETCH_SITE_INFO';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';

const ROOT_URL = 'http://code.liquidthink.net';
const API_URL = '/api/v1/';

const postsRequest = axios.get(`${ROOT_URL}${API_URL}pages.json`);
const siteInfoRequest = axios.get(`${ROOT_URL}${API_URL}config.json`);
const projectsRequest = axios.get(`${ROOT_URL}${API_URL}projects.json`);

export function fetchPosts(term) {
  return {
    type: FETCH_POSTS,
    payload: {
      promise: postsRequest,
      term //optional argument
    }
  };
}

export function fetchPost(title) {
  return {
    type: FETCH_POST,
    payload: {
      promise: postsRequest,
      title
    }
  };
}


export function fetchPage(title, url) {
    const request = axios.get(`${ROOT_URL}${url}${title}.json`);
    return {
      type: FETCH_PAGE,
      payload: {
        promise: request
      }
    };
}

export function fetchSiteInfo() {
  return {
    type: FETCH_SITE_INFO,
    payload: {
      promise: siteInfoRequest
    }
  };
}

export function fetchProjects() {
  return {
    type: FETCH_PROJECTS,
    payload: {
      promise: projectsRequest
    }
  };
}
