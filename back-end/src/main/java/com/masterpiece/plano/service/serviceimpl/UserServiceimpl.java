package com.masterpiece.plano.service.serviceimpl;

import com.masterpiece.plano.entity.Role;
import com.masterpiece.plano.entity.User;
import com.masterpiece.plano.repository.RoleRepository;
import com.masterpiece.plano.repository.UserRepository;
import com.masterpiece.plano.service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserServiceimpl implements UserService {

    private  final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    private final RoleRepository roleRepository;

    public UserServiceimpl(UserRepository userRepository, PasswordEncoder passwordEncoder, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.roleRepository = roleRepository;
    }

    @Override
    public User createUser(User userRequest) {
        userRequest.setPassword(passwordEncoder.encode(userRequest.getPassword()));
        Optional<Role> role = roleRepository.findById("b6563ab0-b81b-44bf-ae5d-d4f36fbcbb6b");
    if (role.isPresent()) {
        Set<Role> userRole = new HashSet<>();
        userRole.add(role.get());
       userRequest.setRoles(userRole);
    }
        return userRepository.save(userRequest);
    }

    @Override
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }


}
