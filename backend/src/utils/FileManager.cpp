#include "../../include/utils/FileManager.h"

#include <fstream>
#include <sstream>

using namespace std;

bool FileManager::exists(const string& path)
{
    ifstream file(path);

    return file.good();
}

bool FileManager::create(const string& path)
{
    ofstream file(path);

    return file.good();
}

bool FileManager::append(
    const string& path,
    const string& text)
{
    ofstream file(path, ios::app);

    if(!file.is_open())
        return false;

    file << text << endl;

    return true;
}

string FileManager::read(const string& path)
{
    ifstream file(path);

    if(!file.is_open())
        return "";

    stringstream buffer;

    buffer << file.rdbuf();

    return buffer.str();
}