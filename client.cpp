#include <stdio.h> 
#include <sys/socket.h> 
#include <arpa/inet.h> 
#include <unistd.h> 
#include <string.h> 

int main(int argc, char const *argv[]){
int sockf;
int portnum; // port number

struct sockaddr_in serv_addr;
struct hostent *server;
     
argv[1] = "xxx.xxx.xxx.xxx"; // ip of server
argv[2] = portnum;
 
sockf = socket(AF_INET, SOCK_STREAM, 0); // generate file descriptor 
if (sockf < 0){
  perror("ERROR opening socket");
  }
 
server = gethostbyname(argv[1]); //the ip address (or server name) of the listening server.
serv_addr.sin_family = AF_INET;
serv_addr.sin_port = htons(portno);

if(inet_pton(AF_INET, argv[1], &serv_addr.sin_addr)<=0){ 
  printf("\nInvalid address/ Address not supported \n"); 
  return -1; 
  } 
  
  if (connect(sockf, (struct sockaddr *)&serv_addr, sizeof(serv_addr)) < 0) {
    printf("\nConnection Failed \n"); 
    return -1; 
    } 
}

