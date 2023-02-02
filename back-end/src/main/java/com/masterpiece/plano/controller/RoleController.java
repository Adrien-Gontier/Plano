package com.masterpiece.plano.controller;

import com.masterpiece.plano.entity.Role;
import com.masterpiece.plano.service.RoleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/plano/roles")
public class RoleController {

    private final RoleService roleService;

    public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }

    @GetMapping("/{roleid}")
    public ResponseEntity<Role> getRoleById(@PathVariable("roleid") final String roleId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(roleService.getRoleById(roleId));
    }



    @PostMapping("")
    public ResponseEntity createRole(@RequestBody Role roleRequest) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(roleService.createRole(roleRequest));
    }



}
