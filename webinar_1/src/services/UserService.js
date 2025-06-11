import { ApiClient } from '../utils/api.js';

export class UserService {
  constructor() {
    this.api = new ApiClient();
  }

  async getAllUsers() {
    return this.api.get('/users');
  }

  async getUserById(id) {
    return this.api.get(`/users/${id}`);
  }

  async createUser(userData) {
    return this.api.post('/users', userData);
  }

  async updateUser(id, userData) {
    return this.api.put(`/users/${id}`, userData);
  }

  async deleteUser(id) {
    return this.api.delete(`/users/${id}`);
  }

  async getUserPosts(userId) {
    return this.api.get(`/users/${userId}/posts`);
  }
}
