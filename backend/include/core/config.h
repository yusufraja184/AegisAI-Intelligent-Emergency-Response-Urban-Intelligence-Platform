#ifndef CONFIG_H
#define CONFIG_H

#include <string>
#include <unordered_map>

class Config
{
private:

    static std::unordered_map<std::string,std::string> settings;

public:

    static bool load(const std::string& filename);

    static std::string get(const std::string& key);
};

#endif