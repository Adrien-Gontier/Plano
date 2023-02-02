package com.masterpiece.plano.service.serviceimpl;

import com.masterpiece.plano.entity.Role;
import com.masterpiece.plano.exception.ResourceNotFoundException;
import com.masterpiece.plano.repository.RoleRepository;
import com.masterpiece.plano.service.RoleService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceimpl implements RoleService {

    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    public RoleServiceimpl(RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public Role getRoleById(String roleId) {
        return roleRepository.findById(roleId).orElseThrow(() ->
                new ResourceNotFoundException("This role doesn't exist"));
    }

    @Override
    public Object createRole(Role roleRequest) {
        return roleRepository.save(roleRequest);
    }






}
