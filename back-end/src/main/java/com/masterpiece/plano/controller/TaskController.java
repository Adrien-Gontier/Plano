package com.masterpiece.plano.controller;


import com.masterpiece.plano.entity.Task;
import com.masterpiece.plano.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/plano/tasks")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("")
    public ResponseEntity getAllTasks() {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(taskService.getAllTasks());
    }

    @GetMapping("/{taskId}")
    public ResponseEntity getTaskById(@PathVariable("taskId") final String taskId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(taskService.getTaskById(taskId));
    }


    @PostMapping("")
    public ResponseEntity createTask(@RequestBody Task taskRequest) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(taskService.createTask(taskRequest));
    }



    @PutMapping("/{taskId}")
    public ResponseEntity updateTask(@PathVariable String taskId, @RequestBody Task taskRequest) {
        return ResponseEntity
                .status(HttpStatus.ACCEPTED)
                .body(taskService.updateTask(taskId, taskRequest));
    }


    @DeleteMapping("/{taskId}")
    public ResponseEntity<String> deleteTask(@PathVariable String taskId) {
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(taskService.deleteTask(taskId));
    }










}
