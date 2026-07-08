cmake_minimum_required(VERSION 3.15)

project(AegisAI)

set(CMAKE_CXX_STANDARD 17)

include_directories(backend/include)

add_executable(AegisAI
    backend/src/main.cpp
    backend/src/core/Application.cpp
)