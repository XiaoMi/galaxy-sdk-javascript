//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


Compression = {
  'NONE' : 0,
  'SNAPPY' : 1
};
Checksum = {
  'NONE' : 0,
  'CRC32' : 1
};
RSFileHeader = function(args) {
  this.magic = null;
  this.version = null;
  this.compression = null;
  this.checksum = null;
  this.count = -1;
  this.metadata = null;
  if (args) {
    if (args.magic !== undefined) {
      this.magic = args.magic;
    }
    if (args.version !== undefined) {
      this.version = args.version;
    }
    if (args.compression !== undefined) {
      this.compression = args.compression;
    }
    if (args.checksum !== undefined) {
      this.checksum = args.checksum;
    }
    if (args.count !== undefined) {
      this.count = args.count;
    }
    if (args.metadata !== undefined) {
      this.metadata = args.metadata;
    }
  }
};
RSFileHeader.prototype = {};
RSFileHeader.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.magic = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.version = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.compression = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.checksum = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I64) {
        this.count = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.metadata = input.readBinary().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

RSFileHeader.prototype.write = function(output) {
  output.writeStructBegin('RSFileHeader');
  if (this.magic !== null && this.magic !== undefined) {
    output.writeFieldBegin('magic', Thrift.Type.STRING, 1);
    output.writeString(this.magic);
    output.writeFieldEnd();
  }
  if (this.version !== null && this.version !== undefined) {
    output.writeFieldBegin('version', Thrift.Type.I32, 2);
    output.writeI32(this.version);
    output.writeFieldEnd();
  }
  if (this.compression !== null && this.compression !== undefined) {
    output.writeFieldBegin('compression', Thrift.Type.I32, 3);
    output.writeI32(this.compression);
    output.writeFieldEnd();
  }
  if (this.checksum !== null && this.checksum !== undefined) {
    output.writeFieldBegin('checksum', Thrift.Type.I32, 4);
    output.writeI32(this.checksum);
    output.writeFieldEnd();
  }
  if (this.count !== null && this.count !== undefined) {
    output.writeFieldBegin('count', Thrift.Type.I64, 5);
    output.writeI64(this.count);
    output.writeFieldEnd();
  }
  if (this.metadata !== null && this.metadata !== undefined) {
    output.writeFieldBegin('metadata', Thrift.Type.STRING, 6);
    output.writeBinary(this.metadata);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

Record = function(args) {
  this.data = null;
  this.checksum = null;
  this.eof = false;
  if (args) {
    if (args.data !== undefined) {
      this.data = args.data;
    }
    if (args.checksum !== undefined) {
      this.checksum = args.checksum;
    }
    if (args.eof !== undefined) {
      this.eof = args.eof;
    }
  }
};
Record.prototype = {};
Record.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.data = input.readBinary().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.checksum = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BOOL) {
        this.eof = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Record.prototype.write = function(output) {
  output.writeStructBegin('Record');
  if (this.data !== null && this.data !== undefined) {
    output.writeFieldBegin('data', Thrift.Type.STRING, 1);
    output.writeBinary(this.data);
    output.writeFieldEnd();
  }
  if (this.checksum !== null && this.checksum !== undefined) {
    output.writeFieldBegin('checksum', Thrift.Type.I32, 2);
    output.writeI32(this.checksum);
    output.writeFieldEnd();
  }
  if (this.eof !== null && this.eof !== undefined) {
    output.writeFieldBegin('eof', Thrift.Type.BOOL, 3);
    output.writeBool(this.eof);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

MAGIC = 'RSF';
