package com.masterpiece.plano.repository;

import com.masterpiece.plano.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByIdentifier(String identifier);
}
