package com.masterpiece.plano.service;

import com.masterpiece.plano.dtos.TaskDto;
import com.masterpiece.plano.entity.Task;

public interface TaskService {
    Iterable getAllTasks();

    TaskDto getTaskById(String taskId);

    Task createTask(Task taskRequest);

    TaskDto updateTask(String taskId, Task taskRequest);

    String deleteTask(String taskId);
}
