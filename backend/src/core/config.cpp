#include "../../include/core/Config.h"

#include <fstream>
#include <sstream>

using namespace std;

unordered_map<string,string> Config::settings;

bool Config::load(const string& filename)
{
    ifstream file(filename);

    if(!file.is_open())
        return false;

    string line;

    while(getline(file,line))
    {
        if(line.empty())
            continue;

        size_t pos=line.find('=');

        if(pos==string::npos)
            continue;

        string key=line.substr(0,pos);
        string value=line.substr(pos+1);

        settings[key]=value;
    }

    return true;
}

string Config::get(const string& key)
{
    if(settings.find(key)!=settings.end())
        return settings[key];

    return "";
}