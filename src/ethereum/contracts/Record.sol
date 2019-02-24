pragma solidity ^0.4.25;

contract RecordFactory {
    address[] public deployedRecords;

    function createRecord(
        string name,
        string relationship,
        bool living,
        string disease,
        uint ageOfOnset,
        uint ageOfDeath
    ) public {
        address newRecord = new Record(
            name,
            relationship,
            living,
            disease,
            ageOfOnset,
            ageOfDeath,
            msg.sender
        );
        deployedRecords.push(newRecord);
    }

    function getDeployedRecords() public view returns (address[]) {
        return deployedRecords;
    }
}

contract Record {
    //    struct Request {
    //        string description;
    //        uint value;
    //        address recipient;
    //        bool complete;
    //        uint approvalCount;
    //        mapping(address => bool) approvals;
    //    }

    //    Request[] public requests;
    address public owner;
    string name;
    string relationship;
    bool living;
    string disease;
    uint ageOfOnset;
    uint ageOfDeath;

    modifier restricted() {
        require(msg.sender == owner);
        _;
    }

    constructor(
        string name,
        string relationship,
        bool living,
        string disease,
        uint ageOfOnset,
        uint ageOfDeath,
        address creator
    ) public {
        owner = creator;
        name = name;
        relationship = relationship;
        living = living;
        disease = disease;
        ageOfOnset = ageOfOnset;
        ageOfDeath = ageOfDeath;
    }

    //    function contribute() public payable {
    //        require(msg.value > minimumContribution);
    //
    //        approvers[msg.sender] = true;
    //        approversCount++;
    //    }

    //    function createRequest(string description, uint value, address recipient) public restricted {
    //        Request memory newRequest = Request({
    //            description: description,
    //            value: value,
    //            recipient: recipient,
    //            complete: false,
    //            approvalCount: 0
    //            });
    //
    //        requests.push(newRequest);
    //    }

    //    function approveRequest(uint index) public {
    //        Request storage request = requests[index];
    //
    //        require(approvers[msg.sender]);
    //        require(!request.approvals[msg.sender]);
    //
    //        request.approvals[msg.sender] = true;
    //        request.approvalCount++;
    //    }
    //
    //    function finalizeRequest(uint index) public restricted {
    //        Request storage request = requests[index];
    //
    //        require(request.approvalCount > (approversCount / 2));
    //        require(!request.complete);
    //
    //        request.recipient.transfer(request.value);
    //        request.complete = true;
    //    }

    function getSummary() public view returns (
        string,
        string,
        bool,
        string,
        uint,
        uint,
        address
    ) {
        return (
        name,
        relationship,
        living,
        disease,
        ageOfOnset,
        ageOfDeath,
        owner
        );
    }

    //    function getRequestsCount() public view returns (uint) {
    //        return requests.length;
    //    }
}