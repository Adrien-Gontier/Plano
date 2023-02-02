package com.masterpiece.plano.service;

import com.masterpiece.plano.entity.User;
import com.masterpiece.plano.model.SecurityUser;
import com.masterpiece.plano.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JpaUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    public JpaUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository
                .findByIdentifier(username)
                .map((User user) -> new SecurityUser(user))
                .orElseThrow(() -> new UsernameNotFoundException("Username not found: " + username));
    }
}
