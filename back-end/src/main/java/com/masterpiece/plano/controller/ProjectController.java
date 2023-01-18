package com.masterpiece.plano.controller;

import com.masterpiece.plano.service.ProjectService;
import com.masterpiece.plano.entity.Project;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/plano/projects")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("")
    public ResponseEntity getAllProjects() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(projectService.getAllProjects());
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<Project> getProjectById(@PathVariable("projectId") final String projectId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(projectService.getProjectById(projectId));
    }


    @PostMapping("")
    public ResponseEntity createProject(@RequestBody Project projectRequest) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(projectService.createProject(projectRequest));
    }

    @PutMapping("/{projectId}")
    public ResponseEntity updateProject(@PathVariable String projectId, @RequestBody Project projectRequest) {
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body(projectService.updateProject(projectId, projectRequest));
    }

    @DeleteMapping("/{projectId}")
    public ResponseEntity<String> deleteProject(@PathVariable String projectId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(projectService.deleteProject(projectId));
    }


    @PostMapping("/puttaskinproject/{projectid}/{taskid}")
    public ResponseEntity putTaskInProject(@PathVariable("projectid") final String projectId, @PathVariable("taskid") final String taskId) {
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body(projectService.putTaskInProject(projectId, taskId));
    }



}
