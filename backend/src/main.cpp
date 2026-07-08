#include "../include/core/Application.h"

int main()
{
    Application app;

    app.initialize();

    app.run();

    app.shutdown();

    return 0;
}