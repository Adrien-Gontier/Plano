package com.masterpiece.plano.service;

import com.masterpiece.plano.entity.Role;

public interface RoleService {
    Object createRole(Role roleRequest);



    Role getRoleById(String roleId);
}
