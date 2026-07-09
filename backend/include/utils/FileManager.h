#ifndef FILE_MANAGER_H
#define FILE_MANAGER_H

#include <string>

class FileManager
{
public:

    static bool exists(const std::string& path);

    static bool create(const std::string& path);

    static bool append(const std::string& path,
                       const std::string& text);

    static std::string read(const std::string& path);
};

#endif