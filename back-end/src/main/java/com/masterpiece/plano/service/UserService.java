package com.masterpiece.plano.service;

import com.masterpiece.plano.entity.User;

public interface UserService {
    User createUser(User userRequest);

    Iterable getAllUsers();
}
